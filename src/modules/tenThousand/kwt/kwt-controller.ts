import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwt")
export default class KwtController {
  @operation({
    summary: "Get Kwt",
  })
  @get()
  static getKwt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kwt",
  })
  @post("{id}")
  static createKwt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
