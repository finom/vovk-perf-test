import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iut")
export default class IutController {
  @operation({
    summary: "Get Iut",
  })
  @get()
  static getIut = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iut",
  })
  @post("{id}")
  static createIut = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
