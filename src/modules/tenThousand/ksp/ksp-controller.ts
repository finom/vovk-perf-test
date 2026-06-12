import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksp")
export default class KspController {
  @operation({
    summary: "Get Ksp",
  })
  @get()
  static getKsp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ksp",
  })
  @post("{id}")
  static createKsp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
