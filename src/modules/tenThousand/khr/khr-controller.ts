import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khr")
export default class KhrController {
  @operation({
    summary: "Get Khr",
  })
  @get()
  static getKhr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Khr",
  })
  @post("{id}")
  static createKhr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
