import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ieo")
export default class IeoController {
  @operation({
    summary: "Get Ieo",
  })
  @get()
  static getIeo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ieo",
  })
  @post("{id}")
  static createIeo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
