import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljx")
export default class LjxController {
  @operation({
    summary: "Get Ljx",
  })
  @get()
  static getLjx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ljx",
  })
  @post("{id}")
  static createLjx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
