import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqe")
export default class CqeController {
  @operation({
    summary: "Get Cqe",
  })
  @get()
  static getCqe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cqe",
  })
  @post("{id}")
  static createCqe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
