import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejt")
export default class EjtController {
  @operation({
    summary: "Get Ejt",
  })
  @get()
  static getEjt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ejt",
  })
  @post("{id}")
  static createEjt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
