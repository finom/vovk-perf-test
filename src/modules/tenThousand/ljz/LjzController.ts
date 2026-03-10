import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljz")
export default class LjzController {
  @operation({
    summary: "Get Ljz",
  })
  @get()
  static getLjz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ljz",
  })
  @post("{id}")
  static createLjz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
