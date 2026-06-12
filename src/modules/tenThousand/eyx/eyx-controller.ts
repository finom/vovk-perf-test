import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyx")
export default class EyxController {
  @operation({
    summary: "Get Eyx",
  })
  @get()
  static getEyx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eyx",
  })
  @post("{id}")
  static createEyx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
