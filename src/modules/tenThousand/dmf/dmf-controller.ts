import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmf")
export default class DmfController {
  @operation({
    summary: "Get Dmf",
  })
  @get()
  static getDmf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dmf",
  })
  @post("{id}")
  static createDmf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
