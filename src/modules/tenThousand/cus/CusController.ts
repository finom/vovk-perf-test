import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cus")
export default class CusController {
  @operation({
    summary: "Get Cus",
  })
  @get()
  static getCus = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cus",
  })
  @post("{id}")
  static createCus = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
