import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqe")
export default class BqeController {
  @operation({
    summary: "Get Bqe",
  })
  @get()
  static getBqe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bqe",
  })
  @post("{id}")
  static createBqe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
