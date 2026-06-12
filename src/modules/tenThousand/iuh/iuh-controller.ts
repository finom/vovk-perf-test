import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iuh")
export default class IuhController {
  @operation({
    summary: "Get Iuh",
  })
  @get()
  static getIuh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iuh",
  })
  @post("{id}")
  static createIuh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
