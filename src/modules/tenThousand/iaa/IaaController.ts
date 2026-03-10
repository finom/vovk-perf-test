import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iaa")
export default class IaaController {
  @operation({
    summary: "Get Iaa",
  })
  @get()
  static getIaa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iaa",
  })
  @post("{id}")
  static createIaa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
