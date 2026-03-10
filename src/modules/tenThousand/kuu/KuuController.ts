import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kuu")
export default class KuuController {
  @operation({
    summary: "Get Kuu",
  })
  @get()
  static getKuu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kuu",
  })
  @post("{id}")
  static createKuu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
