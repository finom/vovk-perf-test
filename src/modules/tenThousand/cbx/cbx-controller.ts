import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbx")
export default class CbxController {
  @operation({
    summary: "Get Cbx",
  })
  @get()
  static getCbx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cbx",
  })
  @post("{id}")
  static createCbx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
