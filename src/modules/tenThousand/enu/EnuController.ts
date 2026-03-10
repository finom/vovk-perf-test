import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("enu")
export default class EnuController {
  @operation({
    summary: "Get Enu",
  })
  @get()
  static getEnu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Enu",
  })
  @post("{id}")
  static createEnu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
