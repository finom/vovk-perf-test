import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdj")
export default class KdjController {
  @operation({
    summary: "Get Kdj",
  })
  @get()
  static getKdj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kdj",
  })
  @post("{id}")
  static createKdj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
