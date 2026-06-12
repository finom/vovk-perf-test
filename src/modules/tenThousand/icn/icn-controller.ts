import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("icn")
export default class IcnController {
  @operation({
    summary: "Get Icn",
  })
  @get()
  static getIcn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Icn",
  })
  @post("{id}")
  static createIcn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
