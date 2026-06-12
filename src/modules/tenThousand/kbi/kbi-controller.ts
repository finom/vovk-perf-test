import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbi")
export default class KbiController {
  @operation({
    summary: "Get Kbi",
  })
  @get()
  static getKbi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kbi",
  })
  @post("{id}")
  static createKbi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
