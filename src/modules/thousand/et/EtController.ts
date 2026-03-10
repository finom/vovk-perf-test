import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("et")
export default class EtController {
  @operation({
    summary: "Get Et",
  })
  @get()
  static getEt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Et",
  })
  @post("{id}")
  static createEt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
