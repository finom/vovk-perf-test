import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kku")
export default class KkuController {
  @operation({
    summary: "Get Kku",
  })
  @get()
  static getKku = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kku",
  })
  @post("{id}")
  static createKku = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
