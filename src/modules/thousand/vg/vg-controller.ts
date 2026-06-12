import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vg")
export default class VgController {
  @operation({
    summary: "Get Vg",
  })
  @get()
  static getVg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Vg",
  })
  @post("{id}")
  static createVg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
