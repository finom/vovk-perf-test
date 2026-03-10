import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezj")
export default class EzjController {
  @operation({
    summary: "Get Ezj",
  })
  @get()
  static getEzj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ezj",
  })
  @post("{id}")
  static createEzj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
