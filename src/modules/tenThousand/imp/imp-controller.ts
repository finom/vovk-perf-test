import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imp")
export default class ImpController {
  @operation({
    summary: "Get Imp",
  })
  @get()
  static getImp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Imp",
  })
  @post("{id}")
  static createImp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
