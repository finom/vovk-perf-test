import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvc")
export default class DvcController {
  @operation({
    summary: "Get Dvc",
  })
  @get()
  static getDvc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dvc",
  })
  @post("{id}")
  static createDvc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
