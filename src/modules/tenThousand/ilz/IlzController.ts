import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ilz")
export default class IlzController {
  @operation({
    summary: "Get Ilz",
  })
  @get()
  static getIlz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ilz",
  })
  @post("{id}")
  static createIlz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
