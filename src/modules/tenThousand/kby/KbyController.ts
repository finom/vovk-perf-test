import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kby")
export default class KbyController {
  @operation({
    summary: "Get Kby",
  })
  @get()
  static getKby = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kby",
  })
  @post("{id}")
  static createKby = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
