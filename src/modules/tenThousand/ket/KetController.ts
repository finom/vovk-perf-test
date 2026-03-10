import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ket")
export default class KetController {
  @operation({
    summary: "Get Ket",
  })
  @get()
  static getKet = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ket",
  })
  @post("{id}")
  static createKet = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
