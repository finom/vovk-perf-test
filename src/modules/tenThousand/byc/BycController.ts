import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byc")
export default class BycController {
  @operation({
    summary: "Get Byc",
  })
  @get()
  static getByc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Byc",
  })
  @post("{id}")
  static createByc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
