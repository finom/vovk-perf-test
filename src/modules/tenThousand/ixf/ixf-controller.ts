import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixf")
export default class IxfController {
  @operation({
    summary: "Get Ixf",
  })
  @get()
  static getIxf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ixf",
  })
  @post("{id}")
  static createIxf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
