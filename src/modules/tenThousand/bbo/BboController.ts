import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbo")
export default class BboController {
  @operation({
    summary: "Get Bbo",
  })
  @get()
  static getBbo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bbo",
  })
  @post("{id}")
  static createBbo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
