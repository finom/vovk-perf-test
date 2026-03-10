import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vz")
export default class VzController {
  @operation({
    summary: "Get Vz",
  })
  @get()
  static getVz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Vz",
  })
  @post("{id}")
  static createVz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
