import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irw")
export default class IrwController {
  @operation({
    summary: "Get Irw",
  })
  @get()
  static getIrw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Irw",
  })
  @post("{id}")
  static createIrw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
