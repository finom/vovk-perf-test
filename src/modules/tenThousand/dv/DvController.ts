import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dv")
export default class DvController {
  @operation({
    summary: "Get Dv",
  })
  @get()
  static getDv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dv",
  })
  @post("{id}")
  static createDv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
