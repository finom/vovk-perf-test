import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kia")
export default class KiaController {
  @operation({
    summary: "Get Kia",
  })
  @get()
  static getKia = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kia",
  })
  @post("{id}")
  static createKia = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
