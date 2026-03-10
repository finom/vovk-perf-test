import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyi")
export default class EyiController {
  @operation({
    summary: "Get Eyi",
  })
  @get()
  static getEyi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eyi",
  })
  @post("{id}")
  static createEyi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
