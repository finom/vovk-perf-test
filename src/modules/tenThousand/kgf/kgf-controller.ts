import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgf")
export default class KgfController {
  @operation({
    summary: "Get Kgf",
  })
  @get()
  static getKgf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kgf",
  })
  @post("{id}")
  static createKgf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
