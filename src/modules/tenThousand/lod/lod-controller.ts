import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lod")
export default class LodController {
  @operation({
    summary: "Get Lod",
  })
  @get()
  static getLod = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lod",
  })
  @post("{id}")
  static createLod = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
