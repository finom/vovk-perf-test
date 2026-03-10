import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzu")
export default class KzuController {
  @operation({
    summary: "Get Kzu",
  })
  @get()
  static getKzu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kzu",
  })
  @post("{id}")
  static createKzu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
