import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpb")
export default class GpbController {
  @operation({
    summary: "Get Gpb",
  })
  @get()
  static getGpb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gpb",
  })
  @post("{id}")
  static createGpb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
