import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwi")
export default class MwiController {
  @operation({
    summary: "Get Mwi",
  })
  @get()
  static getMwi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mwi",
  })
  @post("{id}")
  static createMwi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
