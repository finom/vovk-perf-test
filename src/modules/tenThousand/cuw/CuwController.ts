import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cuw")
export default class CuwController {
  @operation({
    summary: "Get Cuw",
  })
  @get()
  static getCuw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cuw",
  })
  @post("{id}")
  static createCuw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
