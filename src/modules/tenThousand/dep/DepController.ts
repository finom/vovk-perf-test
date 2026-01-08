import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dep")
export default class DepController {
  @operation({
    summary: "Get Dep",
  })
  @get()
  static getDep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dep",
  })
  @post("{id}")
  static createDep = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
