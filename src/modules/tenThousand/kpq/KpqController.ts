import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpq")
export default class KpqController {
  @operation({
    summary: "Get Kpq",
  })
  @get()
  static getKpq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kpq",
  })
  @post("{id}")
  static createKpq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
