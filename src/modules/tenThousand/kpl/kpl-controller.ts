import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpl")
export default class KplController {
  @operation({
    summary: "Get Kpl",
  })
  @get()
  static getKpl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kpl",
  })
  @post("{id}")
  static createKpl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
