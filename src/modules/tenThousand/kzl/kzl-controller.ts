import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzl")
export default class KzlController {
  @operation({
    summary: "Get Kzl",
  })
  @get()
  static getKzl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kzl",
  })
  @post("{id}")
  static createKzl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
