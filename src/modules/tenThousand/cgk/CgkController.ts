import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgk")
export default class CgkController {
  @operation({
    summary: "Get Cgk",
  })
  @get()
  static getCgk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cgk",
  })
  @post("{id}")
  static createCgk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
