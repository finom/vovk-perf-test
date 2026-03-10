import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljr")
export default class LjrController {
  @operation({
    summary: "Get Ljr",
  })
  @get()
  static getLjr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ljr",
  })
  @post("{id}")
  static createLjr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
