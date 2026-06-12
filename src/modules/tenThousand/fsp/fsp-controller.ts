import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsp")
export default class FspController {
  @operation({
    summary: "Get Fsp",
  })
  @get()
  static getFsp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fsp",
  })
  @post("{id}")
  static createFsp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
