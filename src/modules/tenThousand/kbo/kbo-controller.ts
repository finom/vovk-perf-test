import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbo")
export default class KboController {
  @operation({
    summary: "Get Kbo",
  })
  @get()
  static getKbo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kbo",
  })
  @post("{id}")
  static createKbo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
