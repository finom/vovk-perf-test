import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efz")
export default class EfzController {
  @operation({
    summary: "Get Efz",
  })
  @get()
  static getEfz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Efz",
  })
  @post("{id}")
  static createEfz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
