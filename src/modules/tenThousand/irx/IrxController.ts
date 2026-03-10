import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irx")
export default class IrxController {
  @operation({
    summary: "Get Irx",
  })
  @get()
  static getIrx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Irx",
  })
  @post("{id}")
  static createIrx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
