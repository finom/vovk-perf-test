import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cou")
export default class CouController {
  @operation({
    summary: "Get Cou",
  })
  @get()
  static getCou = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cou",
  })
  @post("{id}")
  static createCou = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
