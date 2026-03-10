import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krr")
export default class KrrController {
  @operation({
    summary: "Get Krr",
  })
  @get()
  static getKrr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Krr",
  })
  @post("{id}")
  static createKrr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
